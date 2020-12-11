# PHASE 2
def convert_to_int(str)
  Integer(str)
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise StandardError 
  end 
end

def feed_me_a_fruit
  maybe_fruit = ""
  until FRUITS.include?(maybe_fruit)
    puts "Hello, I am a friendly monster. :)"

    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    begin StandardError
      reaction(maybe_fruit) 
    rescue
      puts "That's not a fruit I like"
      if maybe_fruit != "coffee"
        break
      end
    end
  end
end  


# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    if @yrs_known < 5
      @yrs_known = 5
      raise ArgumentError.new "Real friendships are greater than 5 years!"
    end
    if @name.length == 0
      raise ArgumentError.new "There's no way your name can be blank!!"
    end
    if @fav_pastime.length == 0
      raise ArgumentError.new "You have no favorite pass time?!?"
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end

b = BestFriend.new("Jona", 4, "the glang")

