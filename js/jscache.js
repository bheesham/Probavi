/*
JSCache 1.2

(c) 2007-2009 Jarek Kostrz
e-mail: jkostrz@gmail.com
www:  http://jscache.ajaxin.pl
http://creativecommons.org/licenses/by/2.5/pl/
W przypadku u¿ycia komercyjnego proszê o informacjê o tym fakcie.
*/

function JSCache(){var storage=typeof localStorage!='undefined'?localStorage:globalStorage[location.hostname];this.storage=storage;this._e=function(t){n=new Date().getTime();if(t||(t-n)>0){return 0}return 1},this.save=function(i,t,o){if(o=="")o={};if(this._e()||o.overwrite){if(o.ttl){t.ttl=new Date(new Date().getTime()+o.ttl*1000).getTime();var x=this;setTimeout(function(){x.remove(i)},o.ttl*1000)}this.storage.setItem(i,t.toJSONString())}},this.get=function(i){if(this.storage.getItem(i)){q=this.storage.getItem(id).value.parseJSON();if(this._e(q.ttl))return null;else return q}},this.remove=function(i){this.storage.removeItem(i)}}