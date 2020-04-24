export const DISHES =
[
  {
   id: 0,
    name:'Uthappizza',
    image: 'assets/images/uthappizza.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
       {
				 id: 1,
         commentText: 'This is so deliciuous',
         author: 'John Doe',
         date: '02-02-2020'
       },
       {
				id: 5,
         commentText: 'Yummy',
         author: 'Mike Flemming',
         date: '05-02-2019'
			 }
		]
   },
 {
    id: 1,
    name:'Zucchipakoda',
    image: 'assets/images/zucchipakoda.png',
    category: 'appetizer',
    label:'',
    price:'1.99',
    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments: [
      {
				id: 2,
        commentText: 'Want to cook it myself',
        author: 'Ker Areena',
        date: '02-02-2019'
      },
      {
				id: 4,
        commentText: 'Yummy',
        author: 'James Copen',
        date: '08-03-2019'
      },
    ]
   },
 {
    id: 2,
    name:'Vadonut',
    image: 'assets/images/vadonut.png',
    category: 'appetizer',
    label:'New',
    price:'1.99',
		description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
		comments: []
   },
 {
    id: 3,
    name:'ElaiCheese Cake',
    image: 'assets/images/elaicheesecake.png',
    category: 'dessert',
    label:'',
    price:'2.99',
		description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
		comments: [
      {
				id: 5,
        commentText: 'Yummy',
        author: 'James Copen',
        date: '02-01-2020'
      },
    ]
   }
 ]
