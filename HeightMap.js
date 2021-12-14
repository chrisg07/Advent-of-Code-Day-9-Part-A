module.exports = class HeightMap {
	lowPoints = []
	map = []
	answer = 0
	
  constructor(lines) {
		for (let [index, entry] of lines.entries()) {
			if (entry) {
				// row of input
				this.map[index] = entry.split('')
			}
		}
		console.log(this.map)
		for (let x = 0; x < this.map.length; x++) {
			for (let y = 0; y < this.map[x].length; y++) {
				this.isLowPoint(x, y)
			}
		}
		this.answer = this.lowPoints.length + this.lowPoints.reduce((a, b) => a + b)
		console.log('answer:', this.answer)
  }

	isLowPoint(x, y) {
		const currentPoint = this.map[x][y]
		let northPoint
		let eastPoint
		let southPoint
		let westPoint
		if (y !== 0) {
			northPoint = this.map[x][y - 1]
		}
		if (y !== this.map[x].length - 1) {
			southPoint = this.map[x][y + 1]
		}
		if (x !== this.map.length - 1) {
			console.log('point', x, y)
			eastPoint = this.map[x + 1][y]
		}
		if (x !== 0) {
			westPoint = this.map[x - 1][y]
		}
		let lowestPoint = true
		if (northPoint && currentPoint >= northPoint) {
			lowestPoint = false
		}
		if (eastPoint && currentPoint >= eastPoint) {
			lowestPoint = false
		}
		if (southPoint && currentPoint >= southPoint) {
			lowestPoint = false
		}
		if (westPoint && currentPoint >= westPoint) {
			lowestPoint = false
		}
		if (lowestPoint) {
			this.lowPoints.push(Number(currentPoint))
		}
	}
}
