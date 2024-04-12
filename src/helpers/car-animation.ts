type AnimationState = {
    id: number;
};

export function animation(car: HTMLElement, distance: number, animationTime: number): AnimationState {
    const state: AnimationState = { id: 0 };
    // const startTime = new Date().getTime();
    const startTime = performance.now();

    async function getInterval() {
        // const currentTime = new Date().getTime();
        const currentTime = performance.now();

        const passedDistance = Math.round((currentTime - startTime) * (distance / animationTime));

        const carStyle = car.style;

        carStyle.transform = `translateX(${Math.min(passedDistance, distance)}px)`;

        if (passedDistance < distance) {
            state.id = window.requestAnimationFrame(getInterval);
        }
    }
    state.id = window.requestAnimationFrame(getInterval);

    return state;
}
