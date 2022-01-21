package com.google.gym.data;

public class Member {
	private String name;
	private String tel;
	private String sex;
			
	public Member(String name, String tel, String sex) {
		this.name = name;
		this.tel = tel;
		this.sex = sex;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public void info() {
		System.out.println("이름 :" +name+ " 연락처 :"+tel+" 성별 :"+sex);
		
	}
	

}
