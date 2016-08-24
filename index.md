---
title: Home
layout: default
---

# Welcome

Welcome to the ENTSO-E base web style guide.


<ul>
    {% assign posts = site.posts | sort: 'date', 'last' %}
    {% for post in posts  %}
    <li class="keyline-bottom"><a class="pad2 block" href="{{post.url}}">{{post.title}}</a></li>
    {% endfor %}
</ul>