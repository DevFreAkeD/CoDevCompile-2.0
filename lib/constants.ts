export const HELLO_WORLD_CODES: Record<string, { title: string; code: string, input: string }> = {
    c: {
        title: "Main.c",
        code: `#include <stdio.h>  // Required for standard input and output functions (printf, scanf)

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        input: "",
    },
    cpp: {
        title: "Main.cpp",
        code: `#include <algorithm>
#include <cstdint>
#include <iostream>
#include <limits>
#include <set>
#include <utility>
#include <vector>

using Vertex    = std::uint16_t;
using Cost      = std::uint16_t;
using Edge      = std::pair< Vertex, Cost >;
using Graph     = std::vector< std::vector< Edge > >;
using CostTable = std::vector< std::uint64_t >;

constexpr auto kInfiniteCost{ std::numeric_limits< CostTable::value_type >::max() };

auto dijkstra( Vertex const start, Vertex const end, Graph const & graph, CostTable & costTable )
{
    std::fill( costTable.begin(), costTable.end(), kInfiniteCost );
    costTable[ start ] = 0;

    std::set< std::pair< CostTable::value_type, Vertex > > minHeap;
    minHeap.emplace( 0, start );

    while ( !minHeap.empty() )
    {
        auto const vertexCost{ minHeap.begin()->first  };
        auto const vertex    { minHeap.begin()->second };

        minHeap.erase( minHeap.begin() );

        if ( vertex == end )
        {
            break;
        }

        for ( auto const & neighbourEdge : graph[ vertex ] )
        {
            auto const & neighbour{ neighbourEdge.first };
            auto const & cost{ neighbourEdge.second };

            if ( costTable[ neighbour ] > vertexCost + cost )
            {
                minHeap.erase( { costTable[ neighbour ], neighbour } );
                costTable[ neighbour ] = vertexCost + cost;
                minHeap.emplace( costTable[ neighbour ], neighbour );
            }
        }
    }

    return costTable[ end ];
}

int main()
{
    constexpr std::uint16_t maxVertices{ 10000 };

    Graph     graph    ( maxVertices );
    CostTable costTable( maxVertices );

    std::uint16_t testCases;
    std::cin >> testCases;

    while ( testCases-- > 0 )
    {
        for ( auto i{ 0 }; i < maxVertices; ++i )
        {
            graph[ i ].clear();
        }

        std::uint16_t numberOfVertices;
        std::uint16_t numberOfEdges;

        std::cin >> numberOfVertices >> numberOfEdges;

        for ( auto i{ 0 }; i < numberOfEdges; ++i )
        {
            Vertex from;
            Vertex to;
            Cost   cost;

            std::cin >> from >> to >> cost;
            graph[ from ].emplace_back( to, cost );
        }

        Vertex start;
        Vertex end;

        std::cin >> start >> end;

        auto const result{ dijkstra( start, end, graph, costTable ) };

        if ( result == kInfiniteCost )
        {
            std::cout << "NO";
        }
        else
        {
            std::cout << result << std::endl;
        }
    }

    return 0;
}`,
        input: `3
3 2
1 2 5
2 3 7
1 3
3 3
1 2 4
1 3 7
2 3 1
1 3
3 1
1 2 4
1 3`,
    },
    python: {
        title: "Main.py",
        code: `# Python has built-in print function, so no imports are required
print("Hello, World!")`,
        input: "",
    },
    java: { 
        title: "Main.java",
        code: `// The java.lang package is automatically imported, so System.out.println() works without an explicit import.

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        input: "",
    },
    csharp: {
        title: "Program.cs",
        code: `using System;
    
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
        input: "",
    },
    javascript: {
        title: "main.js",
        code: `console.log("Hello, World!");`,
        input: "",
    },
    typescript: {
        title: "main.ts",
        code: `const message: string = "Hello, World!";
console.log(message);`,
        input: "",
    },
    php: {
        title: "main.php",
        code: `<?php
    echo "Hello, World!";
?>`,
        input: "",
    },
};