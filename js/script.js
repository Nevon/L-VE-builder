/* Author: Tommy Brunn

*/

/* Adding more list items to the icon list */
var newIconListItem = function() {
	var newItem = '<li class="listitem-icon"> ';
	newItem += ' <span class="iconupload">';
	newItem += ' <input type="file" name="game" size="40">';
	newItem += ' </span>';
	newItem += ' <span class="iconsize">';
	newItem += ' <select name="iconsize" class="iconsizes">';
	newItem += ' <option value="22">22x22px</option>';
	newItem += ' <option value="24">24x24px</option>';
	newItem += ' <option value="32" selected="selected">32x32px</option>';
	newItem += ' <option value="48">48x48px</option>';
	newItem += ' <option value="64">64x64px</option>';
	newItem += ' <option value="128">128x128px</option>';
	newItem += ' <option value="256">256x256px</option>';
	newItem += ' </select>';
	newItem += ' </span>';
	newItem += ' <span class="icondelete">';
	newItem += ' <a href="#" id="icondelete">';
	newItem += ' <img src="images/delete.png" />';
	newItem += ' </a>';
	newItem += ' </span>';
	newItem += '</li>';
	
	$('#icons').append(newItem);
}

$('#iconadd').click(function() {
	// Check to see that we're not trying to add more icons than there 
	// are sizes.
	var currItems = $('#icons li').size();
	var limit = $('select.iconsizes').first().children().size();
	
	if ((currItems < limit) || (limit === 0)) {
		var newIconItem = newIconListItem();
		$('#icons').append(newIconItem);
	} else {
		alert('That\'s plenty of icons, don\'t you think?');
	}
});

/* Removing list items from the icon list */

$('#icondelete').live('click', function() {
	$(this).parent().parent().remove();
});

/*Hide the downloads list by default*/
$('#downloadslist').hide();

/*Toggling the visibility of the downloads list*/
$('#downloadslistlink').click(function() {
	$('#downloadslist').toggle('slow');
});
