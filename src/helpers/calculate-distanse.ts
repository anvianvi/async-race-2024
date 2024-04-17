function calculatePosition(element: HTMLElement): number {
    const { left, width } = element.getBoundingClientRect();
    return left + width;
}

export function calculateDistance(start: HTMLElement, finish: HTMLElement): number {
    const startPosition = calculatePosition(start);
    const finishPosition = calculatePosition(finish);
    return finishPosition - startPosition;
}
