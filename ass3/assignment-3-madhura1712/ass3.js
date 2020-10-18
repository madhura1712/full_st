class restaurantManager
{
    constructor(){
        this.restaurantList=[
            {name:'Utsav', address:'Majiwada, Thane', city:'Thane'},
            {name:'Burger King', address:'Sector 5,Vashi', city:'Navi Mumbai'},
            {name:'Punjabi Tadka', address:'CP, Delhi', city:'Delhi'}
        ];
      
        }
     printAllRestaurantNames(){
         for(var i=0; i<this.restaurantList.length;i++){
             console.log(this.restaurantList[i].name) ;
         }
         

        }
    filterRestaurantByCity(cityx){
        this.filteredlist = this.restaurantList.filter((data)=>{return data.city == cityx})
        for(var i=0; i<this.filteredlist.length;i++)
        {
            console.log(`${this.filteredlist[i].name}`);
            console.log(`${this.filteredlist[i].address}`);
            console.log(`${this.filteredlist[i].city}`);
        }
       
        


        }
    
   
      
    }
    var eng = new  restaurantManager();
    console.log(eng.printAllRestaurantNames()) ;  
    console.log(eng.filterRestaurantByCity("Thane")) ;  

  

    
   
        

    


