### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val # parameter val is not included within paretheses
  # Code not indented correctly
  if val = 1 # should use == to check if values equals 1
  return true
  else
  return false
  end
end

dif max a b # typo should be def not dif
# parameters a and b need to be included within paretheses and separated by comma

  if a > b
      return a
  else

  b   # should be return b
  end
end
# additional end statement not required
end

def looper
  for i in 1..10
    puts i
  end
  # missing return statement of i
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# missing end for if/else statement

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" # should use puts "max(100,1) failed"
  failrues = failures + 1 # typo failrues should be failures
end


if failures # the value of failures hasn't been checked
  puts "Test Failed"
else
  puts "Test Passed"
end
