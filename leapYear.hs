isLeapYear :: Integer -> Bool
isLeapYear year = 
   year `rem` 4 == 0 && year `rem` 100 /= 0 || year `rem` 4 == 0 && year `rem` 400 == 0

main :: IO ()
main = do
    print(isLeapYear 1996)