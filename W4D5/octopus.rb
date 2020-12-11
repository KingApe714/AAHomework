# Big O-ctopus and Biggest Fish
# A Very Hungry Octopus wants to eat the longest fish in an array of fish.

# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def sluggish(arr)
    fish = ""
    (0...arr.length - 1).each do |i|
        (i...arr.length).each do |j|
            if arr[i].length > arr[j].length && arr[i].length > fish.length
                fish = arr[i]
            elsif arr[j].length > arr[i].length && arr[j].length > fish.length
                fish = arr[j]
            end
        end
    end
    fish
end

# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs in O(n log n) in the Sorting Complexity Demo. Remember that Big O is classified by the dominant term.

def dominant(arr)
    return arr if arr.length <= 1
    pivot = [arr[0]]
    left = arr[1..-1].select { |ele| ele.length < arr[0].length }
    right = arr[1..-1].select { |ele| ele.length >= arr[0].length }
    return dominant(left) + pivot + dominant(right)
end

def dom(arr)
    dominant(arr)[-1]
end

# Clever Octopus
# Find the longest fish in O(n) time. The octopus can hold on to the longest fish that you have found so far while stepping through the array only once.

def clever(arr)
    current = arr[0]
    (1...arr.length).each do |i|
        if arr[i].length > current.length
            current = arr[i]
        end
    end
    current
end

p sluggish(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

p dom(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

p clever(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])
#=> "fiiiissshhhhhh"

# Dancing Octopus
# Full of fish, the Octopus attempts Dance Dance Revolution. The game has tiles in the following directions:

# To play the game, the octopus must step on a tile with her corresponding tentacle. We can assume that the octopus's eight tentacles are numbered and correspond to the tile direction indices.

# Slow Dance
# Given a tile direction, iterate through a tiles array to return the tentacle number (tile index) the octopus must move. This should take O(n) time.

def slow_dance(str, arr)
    idx = 0
    (0...arr.length).each do |i|
        if arr[i] == str
            idx = i
            break
        end
    end
    idx
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

p slow_dance("up", tiles_array) # > 0

p slow_dance("right-down", tiles_array) # > 3


# Constant Dance!
# Now that the octopus is warmed up, let's help her dance faster. Use a different data structure and write a new function so that you can access the tentacle number in O(1) time.

def fast_dance(str, hash)
    hash[str]
end

def new_tiles_data_structure(arr)
    hash = {}
    (0...arr.length).each do |i|
        hash[arr[i]] = i
    end
    hash
end

new_tiles_data_structure(tiles_array)
p fast_dance("up", new_tiles_data_structure(tiles_array))  # > 0

p fast_dance("right-down", new_tiles_data_structure(tiles_array))  # > 3