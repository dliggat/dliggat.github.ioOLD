---
layout: post
title: "Testing images"
date: 2013-07-20 12:11
comments: true
published: false
categories:
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque augue vitae sem tempus auctor. Proin et dui ac sem consequat ornare. Aenean non ornare est. Etiam vitae ultrices elit, vulputate pretium lorem. Praesent quis diam ut libero ornare mollis id ut lorem. Cras rutrum vitae neque sed tincidunt. Sed vel hendrerit orci. Etiam accumsan euismod molestie. Proin ut vulputate enim. Nulla sit amet mi pretium, lobortis sem a, molestie lorem. Quisque eu molestie velit. Ut at purus neque. Aliquam rutrum lectus gravida ipsum lacinia, et auctor tortor tristique. Sed et condimentum neque, in ultrices libero. Nullam non odio luctus, elementum magna id, aliquam justo.

#### File goes into images - then specify dimensions for how it should display
{% img center /images/email.png 350 350 'This is a title' 'This is an alt title' %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque augue vitae sem tempus auctor. Proin et dui ac sem consequat ornare. Aenean non ornare est. Etiam vitae ultrices elit, vulputate pretium lorem. Praesent quis diam ut libero ornare mollis id ut lorem. Cras rutrum vitae neque sed tincidunt. Sed vel hendrerit orci. Etiam accumsan euismod molestie. Proin ut vulputate enim. Nulla sit amet mi pretium, lobortis sem a, molestie lorem. Quisque eu molestie velit. Ut at purus neque. Aliquam rutrum lectus gravida ipsum lacinia, et auctor tortor tristique. Sed et condimentum neque, in ultrices libero. Nullam non odio luctus, elementum magna id, aliquam justo.

This [is a link](http://google.com) wouldn't you agree?

#### Codeblock style
{% codeblock lang:ruby %}
if parts = @text.match(/([a-zA-Z\d]*) (.*)/)
  gist, file = parts[1].strip, parts[2].strip
  script_url = script_url_for gist, file
  code       = get_cached_gist(gist, file) || get_gist_from_web(gist, file)
  html_output_for script_url, code
else
  ""
end
{% endcodeblock %}

#### Gist style
{% gist 5990988 gistfile1.sh %}
