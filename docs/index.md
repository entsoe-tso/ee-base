---
title: Home
layout: default
home: true
---

# Welcome

Welcome to the ENTSO-E base web style guide.


<ul>
    {% assign posts = site.posts | sort: 'date', 'last' %}
    {% for post in posts  %}
    <li class="p2y keyline-bottom"><a class="pad2 block" href="{{post.url}}">{{post.title}}</a></li>
    {% endfor %}
</ul>