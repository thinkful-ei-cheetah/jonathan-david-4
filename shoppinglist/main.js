
let shoppingitems = [];

// {id: 1, name: 'apples', checked: false}



$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const item_name = $('input#shopping-list-entry').val();

        const itemHtml = `<li>
        <span class="shopping-item">${item_name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;

        $('.shopping-list').append(itemHtml);
       // $('input#shopping-list-entry').text();
    })
});



$(function () {
    $('.shopping-list').on( "click", ".shopping-item-toggle", function(event) {


        console.log(event.currentTarget.outerText)

    
        $( this ).toggleClass(function() {

            if (event.currentTarget.outerText==='check')
            {
                return ".shopping-item.shopping-item__checked";
            } else{
                return "";
            }

          });

          if (event.currentTarget.outerText==='check')
          {
            $( this ).text('uncheck');
          } else
          {
            $( this ).text('check');
          }
          



      //  console.log( $( this ));
        console.log($( this ).parent().siblings().addClass('shopping-item__checked') );
        
       
      });
});

$(function () {
    $('.shopping-list').on( "click", ".shopping-item-delete", function() {
        console.log( $( this ) );
        $( this )
        .closest( "li" ).remove();
        
      });
});


