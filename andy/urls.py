"""{{ project_name }} URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', views.index, name='index'),
    # ex: /polls/5/
    url(r'^detail', views.detail, name='detail'),
    # ex: /polls/5/results/
    # url(r'^(?P<pk>[\w-]+)/results/', views.ResultsView.as_view(), name='results'),
    # ex: /polls/5/vote/
    # url(r'^(?P<question_id>[\w-]+)/vote/', views.vote, name='vote'),
    url(r'^email', views.emailView, name='email'),
    url(r'^success', views.successView, name='success')
]
