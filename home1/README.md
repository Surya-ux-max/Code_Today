# Code Documentation

### Base Page Template
<div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-400 flex items-center justify-center p-6">
<div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8">

### - Text Inline CSS

<h1 className="text-5xl font-bold text-white">

### Understanding Each Class

min-h-screen - makes the section cover the entire screen height 

### bg-gradient-to-br 

Creates a gradient from top-left to bottom-right.

### Gradient Colors

from-purple-900
via-pink-600
to-orange-400

### Center Everything

flex items-center justify-center

### Responsive Padding

p-6  - Adds space around the content.

### Glass Container 

Width
w-full
max-w-4xl

Responsive width.

Glass Effect
bg-white/10

10% white transparency.

backdrop-blur-lg

Blurs the background behind the card.

Rounded Corners
rounded-3xl

Modern rounded design.

Border
border border-white/20

Soft transparent border.

Shadow
shadow-2xl

Premium floating effect.


## Re usable Component 


export default function PageTemplate({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-400 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8">
        {children}
      </div>
    </div>
  );
}

## Master Template

min-h-screen
bg-gradient-to-br
from-slate-950
via-violet-900
to-indigo-700
flex
items-center
justify-center
p-6

### and 

bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
shadow-2xl