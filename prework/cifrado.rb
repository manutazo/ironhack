def solve_cipher(input)
	 arr_input = input.split("")
	 arr_input.each do |letter|
	  
	  letraencriptada = letter.ord
	  if letraencriptada == 97
	  	letraencriptada = 122
	  	print letraencriptada.chr
	  else 
	  print (letter.ord-1).chr
	  end
	 
	end