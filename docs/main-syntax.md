```sos
@macros some_macros {
  (a, b) -> {
    %a%_somefunc(b)
  }
}

@define object as obj

type ui8 = (unsigned int~8); // chunk size is 8 bit = 1byte
type i8  = (int 8);

***
  multiline comment
***

// singleline comment

int get_age = (Object& linked_object) -> {
  linked_object->age // returned
}

@template<ui8 age_>
ui8 set_age<age_> = (Object& linked_object) -> {
  linked_object->age = age_;
}

Object copy = (Object obj_) -> {
  obj_
}
// or
Object copy = (Object obj_) obj_;

Object add  = (Object left, Object right) left + right; 

@operator"+" (Object left, Object right) {
  (string, string) -> {
    right = left.chuck * left.size >>> right;
    let as Row<int~left.chunk> (
      left, right
    );
    (string)(left + right)
  } 
}

var[int] (
  var1, var2, var3
);
```
