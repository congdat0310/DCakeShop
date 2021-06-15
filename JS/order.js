function check()
            {
                var name = document.getElementById('txtName').value;
                if(name.length==0)
                {
                    alert("Please re-name");
                    document.getElementById("txtName").focus();
                    return;
                }
                var area = document.getElementById('txtArea').value;
                if(area.length==0)
                {
                    alert("Please enter your address");
                    document.getElementById('txtArea').focus();
                    return;
                }
                var number = document.getElementById('contact-number').value;
                if(number.length==0)
                {
                    alert("Please enter contact number");
                    document.getElementById('contact-number').focus();
                    return;
                }
                var item = document.getElementById('item-code').value;
                if(item.length==0)
                {
                    alert("Please enter item code");
                    document.getElementById('item-code').focus();
                    return;
                }
                var sel = document.getElementById('select').value;
                if(sel=='0')
                {
                    alert("Please choose");
                    return;
                }
                var darea = document.getElementById('txtDArea').value;
                if(darea.length==0)
                {
                    alert("Please enter your shipping address");
                    document.getElementById('txtDArea').focus();
                    return;
                }
                var data = document.getElementById('devivery-date').value;
                if(data.length==0)
                {
                    alert("Please select a delivery date");
                    document.getElementById('devivery-date').focus();
                    return;
                }
                var info="";
                info += "Thanks for purchasing our products\n";
                info += "Name : "+name+"\n";
                info += "Address : "+area+"\n";
                info += "Contact number : "+number+"\n";
                info += "Item code : "+item+"\n";
                info += "Quantity : "+sel+"\n";
                info += "Delivery address : "+darea+"\n";
                info += "Delivery Date : "+data+"\n";
                alert(info);
            }