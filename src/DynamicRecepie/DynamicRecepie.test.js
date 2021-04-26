import React from "react";
import DynamicRecepie from "./DynamicRecepie";

describe("DynamicRecepie tests ", () => {

    const recepie = {
        
      "slug":"1101-Fall Pasta Salad",
      "title":"Fall Pasta Salad",
      "ingredients":"<ul><li>1 cup whole wheat pasta, cooked</li><li>1 cup sweet potato raw, cubed</li><li>1 Tbsp. olive oil</li><li>½ cup dried cranberries</li><li>6 oz. roasted turkey breast cutlets</li><li>3 cheese sticks, reduced fat</li><li>½ cup red onion, chopped</li><li>1 cup raw broccoli, chopped</li><li>Dressing</li><li> ¼ cup light mayo</li><li>2 Tbsp. apple cider vinegar</li><li>1 tsp. dijon mustard</li><li>1 tsp. onion powder</li></ul>",
      "directions":"<ul><li>Heat olive oil in a skillet to medium-high.</li><li> Add in cubed sweet potato and roast until soft, stirring frequently.</li><li> Let cool.</li><li>Chop roasted turkey and cheese stick into bite-sized pieces.</li><li>In a large bowl, combine all ingredients except for dressing.</li><li>In a small bowl, combine dressing ingredients.</li><li> Pour into pasta salad and toss to combine.</li><li>Refrigerate for at least an hour before serving</li></ul>",
      "image":{
         "_url":"https://leaf.nutrisystem.com/wp-content/uploads/2019/10/fall-pasta-salad.jpg",
         "_height":"619",
         "_width":"1100"
      },
      "rating":5,
      "totalReviews":10,
      "by":"Yoly",
      "shortTitle":"Coconut shrimp come out great in the air fryer, and are served with a simple...."
   
    }
            it("renders correctly", () => {
                    const {
                        container
                    } = render( < DynamicRecepie recepie = { recepie }
                        />);
                        expect(container).toMatchSnapshot();
                    });


            });