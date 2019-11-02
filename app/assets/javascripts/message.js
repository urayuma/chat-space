$(document).ready(function(){
  function buildHTML(message){

    var img = message.image? `<img src="${message.image}">` : "";

    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message"> 
                    <div class="upper-message__user-name"> 
                      ${message.user_name} 
                    </div> 
                    <div class="upper-message__date"> 
                      ${message.created_at} 
                    </div> 
                  </div> 
                  <div class="lower-message"> 
                    ${message.content}
                    ${img}
                  </div>
                </div>`;

    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      var html = buildHTML(post);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}); 
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.message:last').data("id")
    var url = 'api/messages';
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: url,
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'GET',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      // 追加するHTMLの入れ物を作る
      var insertHTML = "";
          messages.forEach(function(message) {
            insertHTML = buildHTML(message)
          });
          $(".messages").append(insertHTML);
          $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight });
        })
    .fail(function() {
      console.log('error');
    });
  };
  if ($(".messages").length) {
    autoReload = setInterval(reloadMessages, 5000);
   } else {
    clearInterval(autoReload);
   }
});
