const changeStepPosition = (src: number, dest: number) => {
    setSteps(produce((draft) => {
        if (src > dest) {
            let temp = draft[src];
            for (let i = src - 1; i >= dest; i--) {
                draft[i].position = draft[i].position + 1;
                draft[i + 1] = draft[i];
            }
            draft[dest] = temp;
            draft[dest].position = dest + 1;
        }
        if (dest > src) {
            let temp = draft[src];
            for (let i = src + 1; i <= dest; i++) {
                draft[i].position = draft[i].position - 1;
                draft[i - 1] = draft[i];
            }
            draft[dest] = temp;
            draft[dest].position = dest + 1;
        }

    }))
}
