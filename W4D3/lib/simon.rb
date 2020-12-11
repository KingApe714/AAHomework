class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message
    add_random_color
    @sequence_length += 1
  end

  def show_sequence
    puts add_random_color
  end

  def require_sequence

  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "You just made it through that one!!"
  end

  def game_over_message
    puts "Game is over. Your longest sequence was #{@sequence_length}"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq.clear
  end
end
