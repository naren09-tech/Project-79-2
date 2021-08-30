menu_list_array =["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza",
"Veg Margherita Pizza ","Veg Supreme Pizza"];
var htmldata1=menu_list_array;
var item;
varitem2;


function getmenu(){

menu_list_array.sort();
item=null;
item=menu_list_array[0]+'<br>';
        for(var i=1;i<menu_list_array.length;i++){
            item=item+ menu_list_array[i] + '<br>';
        }
        console.log(item);
        document.getElementById("display_menu").innerHTML = item;
}

function add_item()
{
    item2=null;
    menu_list_array.sort();  
    item2=menu_list_array[0]+'<br>';    
    for(var i=1;i<menu_list_array.length;i++)
    {
        item2=item2+ menu_list_array[i]+'<br>';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata1;		
}

function add_top()
{
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}