import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //添加一个属性
  messages: string[] = [];

  //添加信息
  add(message: string) {
    this.messages.push(message);
  }
   //清除消息
  clear() {
    this.messages = [];
  } 
  constructor() { }
}
