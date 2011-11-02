/**
 * JqGrid  extension 0.1 - jQuery Grid 
 *
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to benjamin@gnbit.com so we can send you a copy immediately.
 * 
 * @author     Benjamin Gonzales  benjain@gnbit.com
 * @copyright  Copyright (c) 2011 GnBit.SAC. (http://www.gnbit.com)
 * @license    http://gnbit.com/license/new-bsd     New BSD License
 * @version    0.1.0
 */

;(function($) {
    $.fn.multiselect = function(rowid, status){
        var gridId = this.attr('id');
        if($.isArray(rowid) && rowid.length>0){
            for(i=0;i<rowid.length;i++){
                _set(gridId,rowid[i], status)
            }
        }else{
            _set(gridId,rowid, status)
        }
    }
    
    function _set(gridId,rowid, status){
        if(status){
            localStorage[gridId+'.RowId.'+rowid] = rowid;
        }else{
            localStorage.removeItem(gridId+'.RowId.'+rowid);
        }
    }
    
    $.fn.multiselectDisplay = function(){
        if(localStorage.length>0){
            for (i=0; i<localStorage.length; i++)  
            {  
                key = localStorage.key(i);  
                val = localStorage.getItem(key);  
                $(this).jqGrid('setSelection',val);
            }  
        }
    }
    
    $.fn.multiselectReset = function(){
        localStorage.clear();
    }
})(jQuery);

