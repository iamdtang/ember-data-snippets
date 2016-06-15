// A handy script for generating the CSON from the Ember API docs
// Usage: node create-snippet.js
// Run this and set to the "methods" variable:
// $('.method h3.name.anchorable-toc').filter(function() { return !$(this).parent().hasClass('private'); }).map(function() { return $(this).find('code').text().trim() + $(this).next('.args').text().trim(); });

var methods = ["extractAttributes(modelClass, resourceHash)", "extractErrors(store, typeClass, payload, id)", "extractId(modelClass, resourceHash)", "extractMeta(store, modelClass, payload)", "extractPolymorphicRelationship(relationshipType, relationshipHash, relationshipOptions)", "extractRelationship(relationshipModelName, relationshipHash)", "extractRelationships(modelClass, resourceHash)", "keyForAttribute(key, method)", "keyForLink(key, kind)", "keyForPolymorphicType(key, typeClass, method)", "keyForRelationship(key, typeClass, method)", "modelNameFromPayloadKey(key)", "normalize(modelClass, resourceHash, prop)", "normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)", "normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType)", "normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType)", "normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType)", "normalizeFindBelongsToResponse(store, primaryModelClass, payload, id, requestType)", "normalizeFindHasManyResponse(store, primaryModelClass, payload, id, requestType)", "normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType)", "normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType)", "normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType)", "normalizeQueryResponse(store, primaryModelClass, payload, id, requestType)", "normalizeResponse(store, primaryModelClass, payload, id, requestType)", "normalizeSaveResponse(store, primaryModelClass, payload, id, requestType)", "normalizeSingleResponse(store, primaryModelClass, payload, id, requestType)", "normalizeUpdateRecordResponse(store, primaryModelClass, payload, id, requestType)", "payloadKeyFromModelName(modelName)", "pushPayload(store, payload)", "serialize(snapshot, options)", "serializeAttribute(snapshot, json, key, attribute)", "serializeBelongsTo(snapshot, json, relationship)", "serializeHasMany(snapshot, json, relationship)", "serializeIntoHash(hash, typeClass, snapshot, options)", "serializePolymorphicType(snapshot, json, relationship)"];

methods = ["buildURL(modelName, id, snapshot, requestType, query)", "createRecord(store, type, snapshot)", "dataForRequest(params)", "deleteRecord(store, type, snapshot)", "findAll(store, type, sinceToken, snapshotRecordArray)", "findBelongsTo(store, snapshot, url)", "findHasMany(store, snapshot, url)", "findMany(store, type, ids, snapshots)", "findRecord(store, type, id, snapshot)", "generateIdForRecord(store, type, inputProperties)", "groupRecordsForFindMany(store, snapshots)", "handleResponse(status, headers, payload, requestData)", "headersForRequest(params)", "isInvalid(status, headers, payload)", "isSuccess(status, headers, payload)", "methodForRequest(params)", "pathForType(modelName)", "query(store, type, query)", "queryRecord(store, type, query)", "serialize(snapshot, options)", "shouldBackgroundReloadAll(store, snapshotRecordArray)", "shouldBackgroundReloadRecord(store, snapshot)", "shouldReloadAll(store, snapshotRecordArray)", "shouldReloadRecord(store, snapshot)", "sortQueryParams(obj)", "updateRecord(store, type, snapshot)", "urlForCreateRecord(modelName, snapshot)", "urlForDeleteRecord(id, modelName, snapshot)", "urlForFindAll(modelName, snapshot)", "urlForFindBelongsTo(id, modelName, snapshot)", "urlForFindHasMany(id, modelName, snapshot)", "urlForFindMany(ids, modelName, snapshots)", "urlForFindRecord(id, modelName, snapshot)", "urlForQuery(query, modelName)", "urlForQueryRecord(query, modelName)", "urlForRequest(params)", "urlForUpdateRecord(id, modelName, snapshot)"];

var snippet = methods.map(function(method) {
  var firstParenthesis = method.indexOf('(');
  var methodName = method.substring(0, firstParenthesis);
  var args = method.substring(firstParenthesis);
  var template = `
    '#methodName':
      'prefix': '#methodName'
      'body': """
        #methodName#args {
          $1
        }
      """`;
  return template.replace(/#methodName/g, methodName).replace(/#args/, args);
});

console.log(snippet.join(''));
