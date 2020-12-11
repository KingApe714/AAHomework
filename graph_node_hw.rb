class GraphNode
    attr_accessor :value, :neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end

    def add_neighbor(node)
        self.neighbors << node
    end

    def bfs(starting_node, target_value)
        queue = [starting_node]

        until queue.empty?
            node = queue.shift
            queue[0].neighbors.each do |neighbor|
                p neighbor
                queue << neighbor.value
                if neighbor.value = target_value
                    return neighbor.value
                end
            end
            
        end
        nil
    end
end
a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p a.bfs(a, "d")
# First, construct a GraphNode class. Creating a node should give us access to its value and the nodes to which it connects us - in the case of a bidirectional graph, this will be all its neighbors. For any given node, we should be able to add a neighboring node.

# class GraphNode

# end
# Remember this graph from the readings?

# graph

# You can now build it using your new GraphNode class.