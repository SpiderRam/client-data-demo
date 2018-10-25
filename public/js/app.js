new Vue({
	el:'#vue',
	data:{
        clients: [],
        limit: 5,
        skip: 0
  },
  methods: {
    getClients: function() {
        var self = this;
        $.ajax({
            type: "GET",
            url: "/clients"
        }).then(function(response) {
            console.log(response);
            self.clients = response;
        });
    },
    modalToggle: function() {
        $("#results-modal").modal("toggle");
    }
  },
  created: function() {
      var self = this;
      self.getClients();
  },
  computed: {
  	page(){
    	return this.clients.slice(this.skip, this.skip + this.limit);
    }
  }
});