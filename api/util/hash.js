import{hash,compare} from "bcrypt"
import bcrypt from "bcrypt"
/**
 * @param {String} pass
 */
export const hashPass = async (pass)=>{
    return await hash(pass,await bcrypt.genSalt())
}

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @returns 
 */

export const comparePass = async (from, to)=>{
    try {
        return await compare(from, to)
    } catch (error) {
        console.log(error)
        return false
    }
}