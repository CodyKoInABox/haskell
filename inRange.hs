inRange :: Int -> Int -> Int -> Bool
inRange min max x =
    x >= min && x <= max

main :: IO()
main = do
    print(inRange 5 15 10)