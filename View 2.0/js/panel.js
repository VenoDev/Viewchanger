$(function(){
	$('#20').click(function(){
		
		chrome.tabs.executeScript({
          code: 'document.querySelector(\'[class^=gui_flex-wrapper]\').style.flexDirection = \'row-reverse\';'
        });
		
	});
	$('#30').click(function(){
		
		chrome.tabs.executeScript({
          code: 'document.querySelector(\'[class^=gui_flex-wrapper]\').style.flexDirection = \'row\';'
        });
		
	});
});