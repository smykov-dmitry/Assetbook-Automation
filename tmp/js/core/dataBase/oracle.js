"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const allureSteps_1 = require("../helper/allure/allureSteps");
const oracledb = require('oracledb');
class OracleDbConnection {
    returnValueFromDb({ dbName, user, password, connectionString }, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbResult;
            yield allureSteps_1.allureStep(`Select to '${dbName}' and the following query '${query}'`, () => __awaiter(this, void 0, void 0, function* () {
                dbResult = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let conn;
                    try {
                        conn = yield oracledb.getConnection({
                            user,
                            password,
                            connectString: connectionString
                        });
                        let result = yield conn.execute(query);
                        resolve(result);
                    }
                    catch (err) {
                        reject(this.dbErrorText(err.message, dbName));
                    }
                    finally {
                        if (conn) {
                            try {
                                yield conn.release();
                            }
                            catch (e) {
                                yield console.error(e + `\n data base: ${dbName}`);
                            }
                        }
                    }
                }));
            }));
            return dbResult;
        });
    }
    ;
    updateDb(user, password, connectionString, dbName, query, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbResult;
            yield allureSteps_1.allureStep(`Update'${dbName}' and the following query  '${query}'`, () => __awaiter(this, void 0, void 0, function* () {
                dbResult = new Promise(function (resolve, reject) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let conn;
                        try {
                            conn = yield oracledb.getConnection({
                                user: user,
                                password: password,
                                connectString: connectionString
                            });
                            let result = yield conn.execute(query, params, { autoCommit: true });
                            resolve(result);
                        }
                        catch (err) { // catches errors in getConnection and the query
                            reject(this.dbErrorText(err.message, dbName));
                        }
                        finally {
                            if (conn) { // the conn assignment worked, must release
                                try {
                                    yield conn.release();
                                }
                                catch (e) {
                                    yield console.error(e + `\n data base: ${dbName}`);
                                }
                            }
                        }
                    });
                });
            }));
            return dbResult;
        });
    }
    ;
    returnValueFromDbProcedure({ dbName, user, password, connectionString }, query, nameParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let argQuery = yield this.generateParamsforProc(nameParams);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let conn;
                try {
                    conn = yield oracledb.getConnection({
                        user,
                        password,
                        connectString: connectionString
                    });
                    let result = yield conn.execute(query, argQuery, function (err, result) {
                        if (err) {
                            console.error(err.message);
                            return;
                        }
                        resolve(result);
                    });
                }
                catch (err) { // catches errors in getConnection and the query
                    reject(this.dbErrorText(err.message, dbName));
                }
                finally {
                    if (conn) { // the conn assignment worked, must release
                        try {
                            yield conn.release();
                        }
                        catch (e) {
                            yield console.error(e + `\n data base: ${dbName}`);
                        }
                    }
                }
            }));
        });
    }
    ;
    generateParamsforProc(nameParams) {
        let result = { st: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER } };
        for (let i = 0; i < nameParams.length; i++) {
            result[nameParams[i]] = { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 32767 };
        }
        return result;
    }
    ;
    dbErrorText(errorText, dbName) {
        let errorTranslate;
        if (errorText.includes("ORA-00028")) {
            errorTranslate = `Your session has been killed \n error: ${errorText} \n data base: ${dbName}`;
        }
        else if (errorText.includes("ORA-00030")) {
            errorTranslate = `A user session with the specified ID does not exist\n error: ${errorText} \n data base: ${dbName}`;
        }
        else if (errorText.includes("ORA-06512")) {
            errorTranslate = `Session marked for destruction\n error: ${errorText} \n data base: ${dbName}`;
        }
        else {
            errorTranslate = `error while working with bd: ${errorText} \n data base: ${dbName}`;
        }
        return errorTranslate;
    }
}
exports.OracleDbConnection = OracleDbConnection;
