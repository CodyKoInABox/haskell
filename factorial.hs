factorial :: Int -> Int
factorial x =
    if x <= 1 then
        1
    else
        x * factorial (x - 1)

main :: IO()
main = do
    print(factorial 5)