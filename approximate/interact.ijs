inputs = [
  {
    .text="Golden Ratio (φ)"
    .num=1.6180339887498
  }, {
    .text="Pi (π)"
    .num=3.1415926535897
  }
]

for input in inputs {
  <button
    .onclick {
      textbox.set(input.num)
    }
    "{input.text}"
  >
}

<
  "Input a number:"
  textbox=<textbox>
>

<button
  "Calculate"
  .onclick {
    calculate(places=1000)
  }
>

output = <>
"The cat and the hat"

calculate = (int places) {
  output.clear()
  float value = textbox.get()
  numerator = 0
  denominator = 1
  bestApprox = "0/1"
  bestDelta = value
  for i in :places {
    if numerator / denominator < value {
      numerator++
    } else {
      denominator++
    }
    delta = abs((numerator /. denominator) - value)
    if delta < bestDelta {
      bestDelta = delta
      bestApprox = "{numerator} / {denominator}"
    }

  }
}