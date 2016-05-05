def decypher(word)
  chars = word.split(//)
  for items in chars do
    char_position = items.ord-1
    if items.ord == 97
      char_position = 122
    end
    print char_position.chr
  end
end


puts "texto cifrado?"
word = gets.chomp
decypher(word)