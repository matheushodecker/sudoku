<script>
export default {
  data() {
    return {
      grid: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ],
      fixed: [
        [true, true, false, false, true, false, false, false, false],
        [true, false, false, true, true, true, false, false, false],
        [false, true, true, false, false, false, false, true, false],
        [true, false, false, false, true, false, false, false, true],
        [true, false, false, true, false, true, false, false, true],
        [true, false, false, false, true, false, false, false, true],
        [false, true, false, false, false, false, true, true, false],
        [false, false, false, true, true, true, false, false, true],
        [false, false, false, false, true, false, false, true, true],
      ],
      selectedRow: null,
      selectedCol: null,
      showNumberPicker: false,
    };
  },
  methods: {
    isFixed(row, col) {
      return this.fixed[row][col];
    },
    validateInput(rowIndex, colIndex) {
      const value = this.grid[rowIndex][colIndex];
      if (value < 1 || value > 9) {
        this.grid[rowIndex][colIndex] = 0; // Reset if out of bounds
      }
    },
    solve() {
      alert("Solver not implemented yet!");
    },
    openNumberPicker(rowIndex, colIndex) {
      if (!this.isFixed(rowIndex, colIndex)) {
        this.selectedRow = rowIndex;
        this.selectedCol = colIndex;
        this.showNumberPicker = true;
      }
    },
    selectNumber(number) {
      this.grid[this.selectedRow][this.selectedCol] = number;
      this.showNumberPicker = false;
    },
  },
};
</script>

<template>
  <div class="sudoku">
    <h1>Sudoku</h1>
    <div class="grid">
      <div class="cell" v-for="(row, rowIndex) in grid" :key="rowIndex">
        <div v-for="(value, colIndex) in row" :key="colIndex">
          <input type="number" :value="value" :disabled="isFixed(rowIndex, colIndex)"
            @focus="openNumberPicker(rowIndex, colIndex)" @input="validateInput(rowIndex, colIndex)" min="1" max="9" />
        </div>
      </div>
    </div>
    <button @click="solve">Solve</button>

    <div v-if="showNumberPicker" class="number-picker">
      <h2>Escolha um número:</h2>
      <div class="numbers">
        <button v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="number" @click="selectNumber(number)">
          {{ number }}
        </button>
      </div>
      <button @click="showNumberPicker = false">Cancelar</button>
    </div>
  </div>
</template>

<style>
.sudoku {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(9, 40px);
  gap: 2px;
}

.cell input {
  width: 38px;
  height: 38px;
  text-align: center;
  font-size: 20px;
}

.number-picker {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.numbers {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.number-picker button {
  margin: 0 5px;
}
</style>