var CnamAutocomplete = new Class({

	Binds: ['init', 'getElements', 'getLabelList','getMatchingElement'],
	
	options : {
		minLength : 1,
		maxChoices : 3
	},
	elements : [],
	autoCompl : null,
	jsonRequest : null,
	
	/**
	* Constructeur de classe
	* @param data.url 						: l'url de l'API retournant les �lements � afficher dans la liste d�roulante
	* @param data.field 					: le champ sous lequel sera affich�e la liste d�roulante
	* @param data.options.minLength			: la longueur minimum de la cha�ne saisie avant l'affichage de la liste d�roulante
	* @param data.options.maxChoices 		: le nombre maximum de choix affich�s dans la liste d�roulante
	* @param data.onSelection				: fonction ex�cut�e lors de la s�lection d'un �l�ment dans la liste d�roulante
	* @param data.onSuccess					: fonction ex�cut�e lors du succ�s de l'appel � lAPI
	* @param data.onInput					: fonction ex�cut�e lors la saisie dans le champ
	* @param data.labelSelector	 			: fonction qui retourne le chemin d'acc�s vers le label affich� dans la liste d�roulante
	* @param data.elementsSelector			: fonction qui retourne les �l�ments � traiter dans la r�ponse de l'API
	* @param data.requestParameter			: param�tre dans la requ�te pour r�cup�rer la saisie � envoyer � l'API
	* @param data.requestParameterLatitude 	: param�tre dans la requ�te pour envoyer la latitude � l'API
	* @param data.requestParameterLongitude : param�tre dans la requ�te pour envoyer la longitude � l'API
	* @param data.errorMessage				: message d'erreur � afficher si l'API est KO
	* @param data.scoreMini					: score minimum pour l'affichage d'un r�sultat de l'API BAN
	* @param data.handleError		        : fonction qui g�re les messages d'erreur
	*/
	initialize: function(data) {
		this.url = data.url || '';
		this.field = data.field;
		this.options.minLength = data.options.minLength || '';
		this.options.maxChoices = data.options.maxChoices || '';
		this.onSelection = data.onSelection;
		this.onSuccess = data.onSuccess;
		this.onInput = data.onInput;
		this.labelSelector = data.labelSelector;
		this.elementsSelector = data.elementsSelector;
		this.requestParameter = data.requestParameter;
		this.requestParameterLatitude = data.requestParameterLatitude;
		this.requestParameterLongitude = data.requestParameterLongitude;
		this.elements = [];
		this.errorMessage = data.errorMessage;
		this.scoreMini = data.scoreMini;
		this.handleError = data.handleError;
	},
	
	init: function() {

		this.autoCompl = new Autocompleter.Base.Local(
		  		 	$(this.field),							// ID du champ � utiliser
				    [], 									// les propositions
				    {                            		
				      minLength: this.options.minLength,	// montre les propositions � partir d'1 caract�re
				      maxChoices: this.options.maxChoices,	// nombre max de propositions affich�es
				      filter: function(){
				      			return this.getLabelList();}.bind(this),
				      cache: false,
				      onSelection: this.onSelection
				    }
				);
        
		this.updateRequest();

		$(this.field).addEvent('input', function(event) {
			var parameter = {};
			parameter[this.requestParameter] = event.target.value;
			if (this.coordinates) {
				parameter[this.requestParameterLatitude] = this.coordinates.latitude;
				parameter[this.requestParameterLongitude] = this.coordinates.longitude;
			}
			if (event.target.value.length > 0) {
		  		this.jsonRequest.get(parameter);
		  	}
		  	this.onInput(event);
		 }.bind(this));
	},
  
    updateRequest : function() {
        this.jsonRequest = new Request({
           url: this.url,
           method: 'get',
           onSuccess: function(reponse){
                var scoreMini = parseFloat(this.scoreMini);
                var reponseJSON = JSON.decode(reponse);
                reponseJSON.codeRetour = 0;
                this.elements = this.elementsSelector(reponseJSON);
                this.elements = this.elements.filter(function(element){
                    return element.properties.score > scoreMini;
                    });
                this.autoCompl.update(this.autoCompl.filter());
                this.onSuccess(reponseJSON);
                
           }.bind(this),
           onFailure: function(){
                this.handleError(this.errorMessage)
           }.bind(this),
           onError: function(){
                this.handleError(this.errorMessage)
           }
        });
    },
    
	getElements : function() {
		return this.elements;
	},
	
	getLabelList : function() {
		return this.elements.map(this.labelSelector);
	},
	
	getMatchingElement : function() {
		return this.elements.find(function(element){
	  		return this.labelSelector(element).toUpperCase() === $(this.field).value.toUpperCase();
	 	}.bind(this));
	},
	
	setCoordinates : function(coord) {
		this.coordinates = coord;
	}
});
