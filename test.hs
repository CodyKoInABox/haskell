

--"Hello, World!" string
hello :: [Char]
hello = "Hello, World!"

helloWorld :: IO ()
helloWorld = print hello

--double an integer
double :: Int -> Int
double x = x * 2

--multiply two integers
multiply :: Int -> Int -> Int
multiply x y = x * y

--tests if integer is in range of any two integers
inRange :: Int -> Int -> Int -> Bool
inRange min max x =
    x >= min && x <= max

--factorial of an integer using recursion
factorial :: Int -> Int
factorial x =
    if x <= 1 then
        1
    else
        x * factorial (x - 1)



oiMarcos :: [Char]
oiMarcos = "Oi Marcos =)"

falarOiMarcos :: IO ()
falarOiMarcos = print oiMarcos

isLeapYear :: Integer -> Bool
isLeapYear year = 
   year `rem` 4 == 0 && year `rem` 100 /= 0 || year `rem` 4 == 0 && year `rem` 400 == 0

--main function
main :: IO ()
main = do
    helloWorld
    print(factorial 5)
    falarOiMarcos
    print(isLeapYear 2000)