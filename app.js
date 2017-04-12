new Vue({
  el:'#events',
  data:{
    event:{name:'', description:'', date:''},
    events:[]
  },
  mounted: function(){
    this.fetchEvents();
  },
  methods:{
    fetchEvents: function(){
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      this.events = events;
    },//fetchEvents

    addEvent: function(){
      if (this.event.name){
        this.events.push(this.event);
        this.event = {name: '', description: '', date:''};
      }//if
    },//addEvent
    deleteEvent: function(index){
      if(confirm("You Sure?")){
        this.events.splice(index, 1);
      }
    }//deleteEvent
  }//methods

});//new Vue


new Vue({
  el: '#app-2',
  data:{
    title:'This is the to do list portion of the app',
    todo:{userId: '' , id: '' ,title: '', completed: false},
    todos:[]
  },
  mounted:function(){
    this.getList();
  },
  methods:{
    getList: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/todos')
      .then(function(res){
        this.todos = res.body;
      }, function(error) {
        console.log(error);
      });
    }//getlist

  }//methods
});
