# DIY ADTs
# Exercise 1 - Stack
# Let's write a Stack class. To do this, use the following framework:

  class Stack
    def initialize
      # create ivar to store stack here!
      @ivar = []
    end

    def push(el)
      # adds an element to the stack
      @ivar.push(el)
    end

    def pop
      # removes one element from the stack
      @ivar.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @ivar[@ivar.length - 1]
    end
  end

#   var = Stack.new
#   var.push(1)
#   var.push(2)
#   var.push(3)
#   var.push(4)
#   var.pop
#   p var
#   p var.peek
# To test that your code works, create a new instance of the Stack class, and play around with adding and removing elements. Remember, a stack follows the principle of LIFO!

# Exercise 2 - Queue
# Now let's write a Queue class. We will need the following instance methods: enqueue(el), dequeue, and peek.
class Queue
    def initialize
      # create ivar to store stack here!
      @ivar = []
    end

    def enqueue(el)
      # adds an element to the stack
      @ivar.push(el)
    end

    def dequeue
      # removes one element from the stack
      @ivar.shift
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @ivar[@ivar.length - 1]
    end
  end

#   var = Queue.new
#   var.enqueue(1)
#   var.enqueue(2)
#   var.enqueue(3)
#   var.enqueue(4)
#   p var
#   var.dequeue
#   p var
# Test your code to ensure it follows the principle of FIFO.

# Exercise 3 - Map
# As you saw in the videos for tonight, a map can be implemented using a 2D array. Let's write a Map class (following a similar pattern to Stack and Queue) that implements a map using only arrays.

# Remember, a map stores information in key-value pairs, where the keys are always unique. When implemented with arrays, a map might look something like this: my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

# Our Map class should have the following instance methods: set(key, value), get(key), delete(key), show. Note that the set method can be used to either create a new key-value pair or update the value for a pre-existing key. It's up to you to check whether a key currently exists!

# As always, test your code thoroughly to make sure all properties of maps are enforced.

class Map
    def initialize
        @ivar = []
    end

    def set(key, value)
        has_key = false
        #@ivar[0] = [key, value] if @ivar.length == 1
        @ivar.each_with_index do |kv_pair, idx|
            if kv_pair[0] == key
                @ivar[idx][1] = value
                has_key = true
            end
        end
        if has_key == false
            @ivar << [key, value]
        end
    end

    def get(key)
        @ivar.each do |kv_pair|
            if kv_pair[0] == key
                return kv_pair[1]
            end
        end
        return nil
    end

    def delete(key)
        @ivar.each_with_index do |kv_pair, idx|
            if kv_pair[0] == key
                @ivar.delete_at(idx)
            end
        end
    end

    def show
        @ivar.each do |kv_pair|
            puts "#{kv_pair[0]} => #{kv_pair[1]}"
        end
    end
end

var = Map.new
p var