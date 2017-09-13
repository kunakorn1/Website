var url = 'https://apimanament.azure-api.net/left/left?str=';
          url += form.submission.data.string;
          url += '&x=';
          url += form.submission.data.index;
          $.ajax({
            url: url,
            beforeSend: function(xhrObj){
              // Request Header
            },
            type: "GET"
          }).done(function(data){
	form.submission ={ data: {
        string: form.submission.data.string,
        index: form.submission.data.index,
		result: JSON.stringify(data.result)
  }
};
          }).fail(function(err){
            console.log(err)
          });
        console.log(form.submission);