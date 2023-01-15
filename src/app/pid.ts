let pid = 0;

/**
 * Return a new process id, and increments the global count.
 */
export function newPID() : number {
    pid++
    return pid - 1
}