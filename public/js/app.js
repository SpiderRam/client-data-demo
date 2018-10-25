new Vue({
	el:'#vue',
	data:{
        clients: [],
        remittances: [],
        limit: 5,
        skip: 0,
        activeClient: {},
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
    }
  },
  created: function() {
      var self = this;
      self.getClients();
  },
  computed: {

  	page(){
        if (this.skip + this.limit <= this.clients.length && this.skip >= 0) {
            return this.clients.slice(this.skip, this.skip + this.limit);
        }
        else {
            this.skip = 0;
            this.clients = [];
            this.getClients();
        }
    }
  }
});