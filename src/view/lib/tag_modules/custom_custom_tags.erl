-module(custom_custom_tags).
-compile(export_all).

capitalize([Head | Tail]) when Head >= $a, Head =< $z ->
    [Head + ($A - $a) | Tail].

menu(Variables, Options) ->
    string:join(lists:map(fun(Module) -> io_lib:format("<li><a href='/admin/admin/model/~s'><i class='fa fa-list-alt'></i>~s</a></li>", [Module,capitalize(re:replace(Module, "_", " ", [global,{return,list}]))]) end, boss_web:get_all_models()), "").

