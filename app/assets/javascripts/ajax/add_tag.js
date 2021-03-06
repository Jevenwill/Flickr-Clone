$(function(){
  var titles = [];
  var hash = {};
  var templateFn = JST['add_tag']
  $('#tag_input').autocomplete({
                          source: getList(),
                          minLength: 0,
                          appendTo: '#tags',
                          autoFocus: true
  });

  function getList(){
    $.ajax({
      type: "GET",
      url: "/tags",
      success: function(data){
        var tags = $(data);
        _(tags).each(function(tag){
          titles.push(tag.title)
          hash[tag.title] = tag.id;
        })
        console.log(titles)
        console.log(hash)
        console.log(hash['asdf'] == undefined)
      }
    })
    return titles;

  }
  $('#tag_input').keydown(function (e){
    if(e.keyCode == 13 && this.value != ''){
      console.log(this.value);
      var template = templateFn({tag_title: this.value, tag_id: hash[this.value]})
      $('#tags_list').append(template);
      this.value = '';
    }
  })
})