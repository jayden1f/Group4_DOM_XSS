from flask import Blueprint, render_template, request

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/name")
def name():
    return render_template("name.html")

@views.route("/namePatched")
def namePatched():
    return render_template("namePatched.html")

@views.route("/lang")
def lang():
    return render_template("lang.html")

@views.route("/langPatched")
def langPacthed():
    return render_template("langPatched.html")

@views.route("/color")
def color():
    return render_template("color.html")

@views.route("/colorPatched")
def colorPatched():
    return render_template("colorPatched.html")

