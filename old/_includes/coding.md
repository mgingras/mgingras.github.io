<h1><i class="fa fa-code"></i>&nbsp;&nbsp;Coding Projects</h1>
<h4>Here is a list of some of the projects that I have worked on recently:</h4>
<hr>
{% for project in site.categories.coding %}
<h3><i class="fa fa-terminal"></i> open<a href="{{ project.url }}"> {{ project.title }}/</a></h3>
<p>{{ project.content | split: '<!-- abridge -->' | first }}</p>
<hr>
{% endfor %}
