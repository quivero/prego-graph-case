# Use case for Library ```dot-quiver```

This an use case of library [dot-quiver](https://github.com/quivero/quivero-api). It is a NodeJS application. Hence, to start it, you might:

1. Run on command ```npm install && npm start```
2. Type on URL field ```localhost:8080```

The result rendering depends of browser. Either browser choice, the result must be as below:

```
{
    "vertices":"A,B,C,D,E,F",
    "edges":"A_B,B_C,C_D,C_E,E_B,C_F,F_B",
    "vertices_keys_to_indices":{
        "A":0,
        "B":1,
        "C":2,
        "D":3,
        "E":4,
        "F":5
    },
    "adjacency_list":{
        "0":[
            1
        ],
        "1":[
            2
        ],
        "2":[
            3,
            4,
            5
        ],
        "3":[
            
        ],
        "4":[
            1
        ],
        "5":[
            1
        ]
    },
    "sink_nodes":[
        3
    ],
    "source_nodes":[
        0
    ],
    "articulation_nodes":[
        2,
        1
    ],
    "bridges":[
        [
            2,
            3
        ],
        [
            0,
            1
        ]
    ],
    "is_cyclic":true,
    "all_cycles":[
        [
            1,
            2,
            4
        ],
        [
            1,
            2,
            5
        ]
    ],
    "is_eulerian":false,
    "is_connected":true
}
```
