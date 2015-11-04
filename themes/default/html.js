module.exports = function (data) {
  return {
    "200.html": data.defaultTemplate(),
    "index.html": [
      "<!doctype html>",
      "<html>",
      "<head>",
      "<meta charset=\"utf-8\"/>",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"/>",
      "<link href=\"http://fonts.googleapis.com/css?family=Lobster+Two:400,700\" rel=\"stylesheet\" type=\"text/css\">",
      "<link href=\"http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700\" rel=\"stylesheet\" type=\"text/css\">",
      "<link href=\"//cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.1.1/gh-fork-ribbon.min.css\" rel=\"stylesheet\" type=\"text/css\">",
      "<link href=\"" + data.css + "\" rel=\"stylesheet\" type=\"text/css\" />",
      "</head>",
      "<body>",
      "<div id=\"root\"></div>",
      "<script src=\"" + data.main + "\"></script>",
      "</body>",
      "</html>"
    ].join("")
  };
};
